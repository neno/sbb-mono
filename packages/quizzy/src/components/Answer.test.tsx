import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Answer from "./Answer";

const questionId = 100;
let questionType = "single-choice";
const id = 101;
const title = "Option 1";
const toggleAnswer = jest.fn(() => {});
let correct = false;
let showResults = false;
let checked = false;

const getAnswerComponent = () => (
    <Answer
        id={id}
        title={title}
        correct={correct}
        questionId={questionId}
        questionType={questionType}
        showResults={showResults}
        toggleAnswer={toggleAnswer}
        checked={checked}
    />
);

describe("Answer", () => {
    afterEach(() => {
        showResults = false;
        correct = false;
        checked = false;
    });

    test("toggleAnswer", () => {
        render(getAnswerComponent());
        fireEvent.click(screen.getByLabelText(title));
        expect(toggleAnswer).toHaveBeenCalled();
    });

    test("Not checked", () => {
        render(getAnswerComponent());
        const input = screen.getByLabelText(title);
        expect(input.getAttribute("checked")).toBeNull();
    });

    test("Checked", () => {
        checked = true;
        render(getAnswerComponent());
        const input = screen.getByLabelText(title);
        expect(input.getAttribute("checked")).not.toBeNull();
    });

    describe("Atomic Design and BEM", () => {
        test("Default", () => {
            render(getAnswerComponent());
            expect(screen.getByText(title).classList).toContain(
                "a-quiz-answer"
            );
            expect(screen.getByText(title).classList).not.toContain(
                "a-quiz-answer--incorrect"
            );
            expect(screen.getByText(title).classList).not.toContain(
                "a-quiz-answer--correct"
            );
        });

        describe("Show Results", () => {
            test("For incorrect answer", () => {
                showResults = true;
                correct = false;
                render(getAnswerComponent());
                expect(screen.getByText(title).classList).toContain(
                    "a-quiz-answer--incorrect"
                );
            });

            test("For correct answer", () => {
                showResults = true;
                correct = true;
                render(getAnswerComponent());
                expect(screen.getByText(title).classList).toContain(
                    "a-quiz-answer--correct"
                );
            });
        });
    });

    describe("Single-Choice", () => {
        beforeEach(() => {
            questionType = "single-choice";
        });

        test("Snapshot", () => {
            const { container } = render(getAnswerComponent());
            expect(container.firstChild).toMatchSnapshot();
        });

        test("Radio button", () => {
            render(getAnswerComponent());
            const input = screen.getByLabelText(title);
            expect(questionType).toBe("single-choice");
            expect(input.getAttribute("type")).toBe("radio");
            expect(input.getAttribute("name")).toBe(`answer-${questionId}`);
        });
    });

    describe("Multiple-Choice", () => {
        beforeEach(() => {
            questionType = "multiple-choice";
        });

        test("Snapshot", () => {
            const { container } = render(getAnswerComponent());
            expect(container.firstChild).toMatchSnapshot();
        });

        test("Checkbox", () => {
            render(getAnswerComponent());
            const input = screen.getByLabelText(title);
            expect(input.getAttribute("type")).toBe("checkbox");
            expect(input.getAttribute("name")).toBe(`answer-${id}`);
        });
    });
});

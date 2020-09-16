import React from 'react';

import Icon from '../../01-atoms/icon';
import Input from '../../01-atoms/input';
import Button from '../../01-atoms/button';

interface Props {
    label: string;
    buttonText: string;
    placeholder: string;
}

/* stylelint-disable jsx-a11y/label-has-associated-control */
const SearchForm: React.FC<Props> = ({ label, buttonText, placeholder }) => (
    <form className="m-search-form">
        <label className="u-sr-only" htmlFor="search-term">
            {label}
        </label>
        <Input
            name="search-term"
            id="search-term"
            classes={['a-input--search']}
            attrs={{
                placeholder,
            }}
        />
        <div className="m-search-form__submit">
            <Button classes={['a-btn--primary a-btn--icon a-btn--search']} type="submit">
                <span className="u-sr-only">
                    {buttonText}
                </span>
                <Icon name="magnifying-glass" />
            </Button>
        </div>
    </form>
);

export default SearchForm;

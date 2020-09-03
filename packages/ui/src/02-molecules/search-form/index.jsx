import React from 'react';

import Icon from '../../01-atoms/icon';
import Input from '../../01-atoms/input';
import Button from '../../01-atoms/button';

/* stylelint-disable jsx-a11y/label-has-associated-control */
const SearchForm = () => (
    <form className="m-search-form">
        <label className="sr-only" htmlFor="search-term">
            Suchbegriff
        </label>
        <Input
            classes={['a-input--search']}
            attr={{
                placeholder: 'Suchbegriff',
                id: 'search-term',
            }}
        />
        <div className="m-search-form__submit">
            <Button classes={['a-btn--primary a-btn--icon a-btn--search']} type="submit">
                <span className="sr-only">
                    Suche
                </span>
                <Icon name="magnifying-glass" />
            </Button>
        </div>
    </form>
);

export default SearchForm;

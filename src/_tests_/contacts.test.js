import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, screen, waitForElementToBeRemoved} from "@testing-library/react";
import Contacts from "../pages/Contacts";
import {server} from './server';
import userEvent from "@testing-library/user-event";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('contacts get data success', () => {
    test('loading', () => {
        render(<Contacts/>);
        const loader = screen.getByTestId('contacts-loader');

        expect(loader).toBeInTheDocument();
    });

    test('success', async () => {
        render(<Contacts/>);
        const loader = screen.getByTestId('contacts-loader');

        await waitForElementToBeRemoved(loader);

        expect(loader).not.toBeInTheDocument();
        expect(screen.getByTestId('contacts-table-container')).toBeInTheDocument();
    });
});

describe('contacts data view mode', () => {
    test('should equal table', async () => {
        render(<Contacts/>);
        const loader = screen.getByTestId('contacts-loader');

        await waitForElementToBeRemoved(loader);

        expect(screen.getByTestId('contacts-table-container')).toBeInTheDocument();
        expect(screen.getByTestId('toggle-data-view-mode-table')).toHaveClass('Mui-selected');
        expect(screen.queryByTestId('contacts-grid-container')).not.toBeInTheDocument();
        expect(screen.getByTestId('toggle-data-view-mode-grid')).not.toHaveClass('Mui-selected');
    });

    test('should equal grid', async () => {
        render(<Contacts/>);
        const loader = screen.getByTestId('contacts-loader');

        await waitForElementToBeRemoved(loader);

        const toggleGrid = screen.queryByTestId('toggle-data-view-mode-grid');
        userEvent.click(toggleGrid);

        expect(screen.queryByTestId('contacts-table-container')).not.toBeInTheDocument();
        expect(screen.getByTestId('toggle-data-view-mode-table')).not.toHaveClass('Mui-selected');
        expect(screen.queryByTestId('contacts-grid-container')).toBeInTheDocument();
        expect(screen.getByTestId('toggle-data-view-mode-grid')).toHaveClass('Mui-selected');
    });

    test('switch from grid to table', async () => {
        render(<Contacts/>);
        const loader = screen.getByTestId('contacts-loader');

        await waitForElementToBeRemoved(loader);

        const toggleTable = screen.queryByTestId('toggle-data-view-mode-table');
        userEvent.click(toggleTable);

        expect(screen.getByTestId('contacts-table-container')).toBeInTheDocument();
        expect(screen.getByTestId('toggle-data-view-mode-table')).toHaveClass('Mui-selected');
        expect(screen.queryByTestId('contacts-grid-container')).not.toBeInTheDocument();
        expect(screen.getByTestId('toggle-data-view-mode-grid')).not.toHaveClass('Mui-selected');
    })

    test('should equal grid with reload page', async () => {
        window.localStorage.setItem('dataViewMode', 'grid');
        render(<Contacts/>);
        const loader = screen.getByTestId('contacts-loader');

        await waitForElementToBeRemoved(loader);

        expect(screen.queryByTestId('contacts-table-container')).not.toBeInTheDocument();
        expect(screen.getByTestId('toggle-data-view-mode-table')).not.toHaveClass('Mui-selected');
        expect(screen.queryByTestId('contacts-grid-container')).toBeInTheDocument();
        expect(screen.getByTestId('toggle-data-view-mode-grid')).toHaveClass('Mui-selected');
    });
})


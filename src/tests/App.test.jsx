import { describe, it, expect } from 'vitest';

import { within, userEvent, fireEvent } from '@testing-library/react';
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    // expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
    expect(screen.getByRole("app-title").textContent).toMatch(/Memory card game/i);
  });
});

describe("Card Area", () => {
    it("has a list of 12 cards", () => {
        
        render(<App />)
        expect(screen.getAllByRole('card').length).toEqual(12);
       
    });

    it("has a list that is generally what is expected", () => {
        const {container} = render(<App />)
        expect({container}).toMatchSnapshot;
    });
    it("has a list in a certain order", () => {
        render(<App />)
        const firstCard = screen.getAllByRole('card')[0];
        const firstCardName = within(firstCard).getByRole('card-name').textContent;
        expect(firstCardName).toMatch(/dog/i);
    });

    it("changes order when a card is clicked", async () => {
        render(<App />)
        
        //initial first 
        const initialFirstCard = screen.getAllByRole('card')[0];
        const initialFirstCardName = within(initialFirstCard).getByRole('card-name').textContent;

        await fireEvent.click(screen.getAllByRole('card')[0]);

        const newFirstCard = screen.getAllByRole('card')[0];
        const newFirstCardName = within(newFirstCard).getByRole('card-name').textContent;
        expect(initialFirstCardName).not.toMatch(newFirstCardName);



    })


})



describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
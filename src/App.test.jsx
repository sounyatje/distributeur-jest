import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre', () => {
  render(<App />);
  expect(screen.getByText(/Connais-tu les desserts japonais/i)).toBeInTheDocument();
});

test('les boutons du clavier sont présents', () => {
  render(<App />);
  [0,1,2,3,4,5,6,7,8,9].forEach(n => {
    // au moins un bouton avec le texte existe
    expect(screen.getAllByText(n.toString()).length).toBeGreaterThan(0);
  });
  expect(screen.getByText("🔄")).toBeInTheDocument();
  expect(screen.getByText("✅")).toBeInTheDocument();
});


test("affiche le temps restant", () => {
  render(<App />);
  expect(screen.getByText(/Temps restant/i)).toBeInTheDocument();
});

test("un pâtisserie est affichée", () => {
  render(<App />);
  expect(screen.getByAltText(/Amanatto/i)).toBeInTheDocument();
});

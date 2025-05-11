import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AlgorithmDemo from '../components/AlgorithmDemo';

// Mock the SyntaxHighlighter component
vi.mock('react-syntax-highlighter', () => ({
  Prism: ({ children }: { children: string }) => <pre data-testid="syntax-highlighter">{children}</pre>
}));

vi.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  vscDarkPlus: {}
}));

describe('AlgorithmDemo Component', () => {
  const mockProps = {
    title: 'Test Algorithm',
    description: 'This is a test algorithm description',
    pythonCode: 'def test_function():\n    return "Hello, World!"',
    complexity: {
      time: 'O(1)',
      space: 'O(1)'
    },
    examples: [
      {
        input: 'test input',
        output: 'test output',
        explanation: 'test explanation'
      }
    ]
  };

  it('renders the component with correct title and description', () => {
    render(<AlgorithmDemo {...mockProps} />);
    
    expect(screen.getByText('Test Algorithm')).toBeInTheDocument();
    expect(screen.getByText('This is a test algorithm description')).toBeInTheDocument();
  });

  it('displays complexity information correctly', () => {
    render(<AlgorithmDemo {...mockProps} />);
    
    expect(screen.getByText('Time Complexity:')).toBeInTheDocument();
    expect(screen.getByText('O(1)')).toBeInTheDocument();
    expect(screen.getByText('Space Complexity:')).toBeInTheDocument();
  });

  it('shows code tab by default', () => {
    render(<AlgorithmDemo {...mockProps} />);
    
    const codeTab = screen.getByRole('tab', { name: /solution code/i });
    expect(codeTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByTestId('syntax-highlighter')).toBeInTheDocument();
  });

  it('switches to examples tab when clicked', () => {
    render(<AlgorithmDemo {...mockProps} />);
    
    const examplesTab = screen.getByRole('tab', { name: /examples/i });
    fireEvent.click(examplesTab);
    
    expect(examplesTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Example 1')).toBeInTheDocument();
    expect(screen.getByText('Input:')).toBeInTheDocument();
    expect(screen.getByText('test input')).toBeInTheDocument();
    expect(screen.getByText('Output:')).toBeInTheDocument();
    expect(screen.getByText('test output')).toBeInTheDocument();
    expect(screen.getByText('Explanation:')).toBeInTheDocument();
    expect(screen.getByText('test explanation')).toBeInTheDocument();
  });
});

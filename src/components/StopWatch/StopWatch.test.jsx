import { render, screen, fireEvent, act } from "@testing-library/react";
import { StopWatch } from "../StopWatch/StopWatch"; // Adjust the path if needed
import "@testing-library/jest-dom/extend-expect";

jest.useFakeTimers();

describe("StopWatch Component", () => {
  test("renders the component correctly", () => {
    render(<StopWatch />);
    expect(screen.getByText("Stopwatch")).toBeInTheDocument();
    expect(screen.getByText("00:00:00:000")).toBeInTheDocument();
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  test("starts and pauses the stopwatch", () => {
    render(<StopWatch />);

    const startButton = screen.getByText("Start");
    fireEvent.click(startButton);

    expect(screen.getByText("Pause")).toBeInTheDocument();

    // Fast-forward time by 1 second (1000 ms)
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText(/00:00:01:\d{3}/)).toBeInTheDocument(); // Regex to match changing milliseconds

    fireEvent.click(startButton); // Pause
    expect(screen.getByText("Start")).toBeInTheDocument();
  });

  test("resets the stopwatch", () => {
    render(<StopWatch />);

    const startButton = screen.getByText("Start");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(startButton);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText(/00:00:02:\d{3}/)).toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(screen.getByText("00:00:00:000")).toBeInTheDocument();
    expect(resetButton).toBeDisabled(); // Reset button should be disabled after reset
  });

  test("Reset button is disabled initially", () => {
    render(<StopWatch />);
    const resetButton = screen.getByText("Reset");
    expect(resetButton).toBeDisabled();
  });
});

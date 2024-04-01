import { render, screen } from "@testing-library/react";
import { test, vi } from "vitest";
import Map from "../src/components/pages/Location/Map";

vi.mock("@tomtom-international/web-sdk-maps", () => ({
    default: {
        map: vi.fn().mockReturnValue({
            remove: vi.fn(),
        }),
    },
}));

test("renders the map component", () => {
    render(
        <Map />
    );
    const map = screen.getByText(/map/i);
    expect(map).toBeInTheDocument();
    });
import { renderHook, act } from "@testing-library/react-hooks";
import { EMPTY_OR_INCLUDES_LESS_THEN_ONE, NOT_PART_OF_POSSIBLE, useCustomHook } from "./hooks";

describe("Custom hook tests", () => {
    it("Should throw if one of possible values are less or equal 0", () => {
        const state = [1, 0];
        const { result } = renderHook(() => useCustomHook(state, 1));
        expect(result.error).toBeDefined();
        expect(result.error.message).toBe(EMPTY_OR_INCLUDES_LESS_THEN_ONE);
    });
    it("Should throw if possible values list is empty", () => {
        const { result } = renderHook(() => useCustomHook([], 1));
        expect(result.error).toBeDefined();
        expect(result.error.message).toBe(EMPTY_OR_INCLUDES_LESS_THEN_ONE);
    });
    it("Should throw if initial state is not a possible value", () => {
        const state = [4, 3, 1, 6, 27];
        const { result } = renderHook(() => useCustomHook(state, 5));
        expect(result.error).toBeDefined();
        expect(result.error.message).toBe(NOT_PART_OF_POSSIBLE);
    });
    it("Shouldn't change current state if new isn't valid", () => {
        const state = [1, 2];
        const initialState = 2;
        const { result } = renderHook(() => useCustomHook(state, initialState));
        act(() => result.current[1]('a'));
        expect(result.current[0]).toEqual(initialState);
    });
    it("Should set initial state correctly", () => {
        const state = [23, 46, 72];
        const initialState = state[2];
        const { result } = renderHook(() => useCustomHook(state, initialState));
        expect(result.current[0]).toEqual(initialState);
    });
    it("Should change state", () => {
        const state = [1, 2, 3];
        const { result } = renderHook(() => useCustomHook(state, state[0]));
        const newValue = state[1];
        act(() => result.current[1](newValue));
        expect(result.current[0]).toEqual(newValue);
    });
});
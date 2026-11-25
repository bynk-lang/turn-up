export function invariantViolation(agent, invariant, declaration, location) {
    const e = new Error(`InvariantViolation: ${agent}.${invariant}`);
    e.invariantViolation = {
        kind: "InvariantViolation",
        agent,
        invariant,
        declaration,
        location,
    };
    return e;
}
export function fault(kind, message, location) {
    const e = new Error(`${kind}: ${message} (${location})`);
    e.fault = { kind, message, location };
    throw e;
}
// #1653: the `__` aliases emitted code imports.
export { fault as __fault, invariantViolation as __invariantViolation };

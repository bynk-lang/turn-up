export const Ok = (value) => ({ tag: "Ok", value });
export const Err = (error) => ({ tag: "Err", error });
export const Some = (value) => ({ tag: "Some", value });
export const None = { tag: "None" };

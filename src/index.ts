export const identity = <type>(input: type): (() => type) => {
	return () => input;
};

export const five = (): 5 => 5;

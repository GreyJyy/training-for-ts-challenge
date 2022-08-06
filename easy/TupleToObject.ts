type TupleToObject<T extends readonly (keyof any)[]> = { [K in T[number]]: K }

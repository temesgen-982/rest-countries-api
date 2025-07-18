// src/lib/types.ts

// We'll define the shape of a single country object.
// We only need to include the fields we actually use, but it's good practice
// to add others you might need later.
export interface Country {
	name: string;
	nativeName: string;
	population: number;
	region: string;
	subregion: string;
	capital?: string;
	topLevelDomain: string[];
	currencies?: {
		code: string;
		name: string;
		symbol: string;
	}[];
	languages?: {
		name: string;
	}[];
	borders?: string[];
	flags: {
		svg: string;
		png: string;
	};
	alpha3Code: string;
}

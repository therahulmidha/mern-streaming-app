export interface Title {
  _id: string;
  title: string;
  description: string;
  programType: "series" | "movie";
  images: {
    "Poster Art": {
      height: string;
      width: string;
      url: string;
    };
  };
  releaseYear: number;
}

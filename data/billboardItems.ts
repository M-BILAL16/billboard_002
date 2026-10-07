export type PillAccent = "white" | "ice" | "sky" | "blue" | "navy";

export type BillboardItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  number: string;
  /** Swap the film by replacing this path. Only the active story is loaded. */
  video: string;
  /** Short muted loop shown inside the pill. Optional; the thumbnail is used without it. */
  preview?: string;
  poster: string;
  image: string;
  accent: PillAccent;
  /** Desktop anchor, as a percentage of the scene. */
  x: number;
  y: number;
};

const sign = (
  id: string,
  number: string,
  title: string,
  description: string,
  category: string,
  accent: PillAccent,
  x: number,
  y: number,
): BillboardItem => ({
  id,
  number,
  title,
  description,
  category,
  accent,
  x,
  y,
  video: `/videos/signs/${id}.mp4`,
  preview: `/videos/signs/previews/${id}.mp4`,
  poster: `/posters/signs/${id}.jpg`,
  image: `/thumbs/signs/${id}.jpg`,
});

export const heroItems: BillboardItem[] = [
  sign("indoor", "01", "Indoor Signs", "Lobbies and offices, finished to the inch.", "Interior", "white", 17, 23),
  sign("outdoor", "02", "Outdoor Signs", "Built to outlast every New York season.", "Exterior", "ice", 50, 13),
  sign("building", "03", "Building Signs", "Facade letters that become an address.", "Facade", "blue", 83, 23),
  sign("construction", "04", "Construction Signs", "Hoardings that sell the building early.", "Site", "sky", 14, 49),
  sign("event", "05", "Event Signs", "Launches and pop-ups, installed overnight.", "Events", "white", 86, 49),
  sign("large-format", "06", "Large Format Printing", "Billboard scale, gallery-grade color.", "Print", "navy", 18, 75),
  sign("rigid", "07", "Rigid Signs", "Aluminum, acrylic and PVC that lasts.", "Panels", "ice", 82, 75),
  sign("vehicle", "08", "Vehicle Wraps", "Fleets that carry your name uptown.", "Fleet", "sky", 34, 89),
  sign("vinyl", "09", "Vinyl Graphics", "Glass, walls and floors turned to media.", "Vinyl", "white", 66, 89),
];

/** The film the hero opens on. Any hero item id works. */
export const heroOpeningId = "building";

/** Hero centerpiece. `[film]` marks where the shrunken film docks inside the text. */
export const heroHeadline = ["We don’t just", "make signs.", "We build [film]", "NYC landmarks."];

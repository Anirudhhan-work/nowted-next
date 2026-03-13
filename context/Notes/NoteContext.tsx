import { FolderType } from "@/features/folders/type";
import { NotesType } from "@/features/notes/type";
import { createContext } from "react";

type NoteContextType = {
  notesList: NotesType[];
  folderList: FolderType[];
  totalNotes: number;
  page: number;
  hasMore: boolean;
  categoryPage: number;
  categoryHasMore: boolean;
  setFolderListState: (folders: FolderType[]) => void;
  reRenderMidById: (
    folderId: string,
    page?: number,
    signal?: AbortSignal,
  ) => Promise<void>;
  reRenderMidByCategory: (
    category: string,
    page?: number,
    signal?: AbortSignal,
  ) => Promise<void>;
  reRenderBySearch: (search: string) => Promise<void>;
};

export const NoteContext = createContext<NoteContextType | undefined>(
  undefined,
);

"use client";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useNotes } from "@/utils/hooks";
import { createNote } from "@/features/notes/NotesAPI";

const AddNoteButton = () => {
  const { folderId, folderName } = useParams<{
    folderId: string;
    folderName: string;
  }>();
  const [isNoteAdding, setIsNoteAdding] = useState(false);
  const router = useRouter();

  const { reRenderMidById } = useNotes();

  const fetchCreateNote = async () => {
    if (!folderId || !folderName) return toast.error("Please select a folder");
    setIsNoteAdding(true);

    try {
      const res = await createNote(folderId, "", "");
      reRenderMidById(folderId);
      await router.push(`${folderName}/${folderId}/note/${res.id}`);
      toast.success("Note Created Successfully");
    } catch (e) {
      if (e instanceof Error) toast.error(e.message);
      else toast.error("Something went wrong");
    } finally {
      setIsNoteAdding(false);
    }
  };

  return (
    <div className="flex justify-center py-8 px-5 text-white">
      <button
        onClick={fetchCreateNote}
        className={`add-btn ${isNoteAdding && "animate-pulse"}`}
      >
        <Plus /> New Note
      </button>
    </div>
  );
};

export default AddNoteButton;

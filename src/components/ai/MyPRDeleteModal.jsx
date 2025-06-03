import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useDeleteChat } from '@/hooks/my-pr.hook';
import { Trash2Icon } from 'lucide-react';
import { Button } from '../ui/button';

export default function MyPRDeleteModal({ chatId }) {
  const {
    mutate: deleteChat,
    isPending: isDeletePending,
    open,
    setOpen,
  } = useDeleteChat();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Trash2Icon className="size-4 text-light/60 hover:text-light" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-400 mb-4">
            <Trash2Icon className="h-5 w-5" />
            Delete chat
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this chat? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            disabled={isDeletePending}
            onClick={() => deleteChat(chatId)}
          >
            Delete chat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

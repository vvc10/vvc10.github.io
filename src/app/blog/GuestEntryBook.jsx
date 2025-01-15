export default function GuestbookEntry({ name, role, message, date }) {
    return (
      <div className="bg-muted p-4 rounded-lg shadow-sm border">
        <p className="font-semibold text-lg">{name}</p>
        <p className="font-normal text-sm text-muted-foreground mb-4">{role}</p>
        <p className="text-sm text-foreground">{message}</p>
        <p className="text-xs text-muted-foreground mt-1">{date}</p>
      </div>
    )
  }
  
  
export function DropDown({tag, content}: {tag: string, content: Element}) {
    return (
      <div class="drop-down">
        <span>{tag}</span>
        <div class="content">{content}</div>
      </div>
    );
  }
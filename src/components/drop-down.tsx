export function dropDown(tag: string, content: HTMLElement) {
    return (
      <div class="drop-down">
        <span>{tag}</span>
        <div class="content">{content}</div>
      </div>
    );
  }
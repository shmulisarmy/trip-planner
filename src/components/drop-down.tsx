export function DropDown({tag, children}: {tag: string, children: Element}) {
    return (
      <div class="drop-down">
        <span>{tag}</span>
        <div class="content">{children}</div>
      </div>
    );
  }



  export function SingleItemDropDown({tag, children}: {tag: string, children: Element}) {
    console.log("children section")
    return (
      <div class="drop-down">
        <span>{tag}</span>
        {children}
      </div>
    );
  }
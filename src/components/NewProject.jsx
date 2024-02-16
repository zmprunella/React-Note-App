import Input from "./Input";
export default function NewProject() {
  return (
    <div>
      <menu>
        <il>
          <button>Cancel</button>
        </il>
        <il>
          <button>Save</button>
        </il>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textArea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}

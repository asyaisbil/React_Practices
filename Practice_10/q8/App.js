import ActionButton from './ActionButton.js';

export default function App() {
  return (
    <div className="flex justify-center gap-4">
      <ActionButton isActive={false} text="Kaydet" />
      <ActionButton isActive={true} text="Düzenle" />
    </div>
  )
}

// Componente é uma função JavaScript que retorna tags HTML
// Essas tags podem receber propriedades CSS através do "className"

// Export está exportando o componente HelloWorld para outro pasta
import "./global.css";

export function HelloWorld() {
  return (
    <>
      <div className="tela">
        <h1>Hello World</h1>
      </div>
    </>
  );
}

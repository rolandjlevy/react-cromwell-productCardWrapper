import { uniqueId } from 'lodash';

const ProductCard = ({ product, children }) => {

  // all possible section names which must match the name prop of each child
  const sectionNames = [
    'image',
    'heading',
    'subHeading',
    'body',
    'buttonGroup',
    'footer'
  ];

  return (
    <main>
      {/* Render default elements */}
      <h1>ProductCard</h1>
      <header>Default header within ProductCard</header>
      
      {/* Render custom sections */}
      {children.map(child => {
        const { name, children } = child.props;
        return (sectionNames.includes(name) ? <section key={uniqueId()}>{children}</section> : null);
      })}
      
      {/* Render default elements */}
      <details>
        <summary>Product Data</summary>
        <code>
          <pre>{JSON.stringify(product, null, 2)}</pre>
        </code>
      </details>
    </main>
  )
};

export default ProductCard;
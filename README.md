# Inversion of Control

- Problem: ProductCard component currently has 19 props and getting more and more bloated. Content is conditionally rendered based on prop values. There are 8 instances of ProductCard.

- Aim: to decouple ProductCard from the business logic within props and make it as dumb as possible. 

- instead of passing in the logic through ProductCard's props we keep it outside ProductCard and just pass any dependancies down through the children

- Using inversion of control means we can control the logic and content within the wrappers. The order of the sections is whatever we want.

### Links
- https://www.lorenzweiss.de/inversion_of_control_with_react_components/
- https://www.smashingmagazine.com/2021/08/react-children-iteration-methods/ 
import { Card, Typography, Container } from "@mui/material";

export default function ReactPositives() {
  return (
    <Container className="mb-12 mt-8">
      <Card className="border border-gray-200 p-6 shadow-md">
        <Typography
          variant="h5"
          className="mb-4 pb-4 font-semibold text-blue-500"
        >
          Summary for React
        </Typography>
        <ul className="space-y-4">
          <li className="break-words">
            <Typography variant="h6" className="font-semibold text-gray-800">
              Component-Based Architecture
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              React promotes a modular approach to development by breaking the
              UI into reusable components, making code easier to maintain and
              scale.
            </Typography>
          </li>
          <li className="break-words">
            <Typography variant="h6" className="font-semibold text-gray-800">
              Flexibility and Ecosystem
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              React is unopinionated, allowing developers to choose their own
              tools, libraries, and architecture. Its vast ecosystem supports a
              wide range of use cases.
            </Typography>
          </li>
          <li className="break-words">
            <Typography variant="h6" className="font-semibold text-gray-800">
              Performance Optimization
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              React uses a virtual DOM to efficiently update and render only the
              components that change, ensuring high performance in dynamic
              applications.
            </Typography>
          </li>
          <li className="break-words">
            <Typography variant="h6" className="font-semibold text-gray-800">
              Strong Community and Support
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              React has a large and active community, extensive documentation,
              and support from Facebook, ensuring continuous updates and
              improvements.
            </Typography>
          </li>
          <li className="break-words">
            <Typography variant="h6" className="font-semibold text-gray-800">
              Wide Adoption
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              React is widely adopted by major companies like Facebook,
              Microsoft, and Netflix, making it a trusted choice for
              enterprise-level applications.
            </Typography>
          </li>
          <li className="break-words">
            <Typography variant="h6" className="font-semibold text-gray-800">
              Integration with Microsoft 365
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              React is the default framework for Microsoft 365 development,
              including Fluent UI, SharePoint Framework (SPFx), and Power BI
              Developer Samples.
            </Typography>
          </li>
          <li className="break-words">
            <Typography variant="h6" className="font-semibold text-gray-800">
              Rich Developer Experience
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              React’s declarative syntax and developer tools (like React
              DevTools) make debugging and building user interfaces intuitive
              and efficient.
            </Typography>
          </li>
          <li className="break-words">
            <Typography variant="h6" className="font-semibold text-gray-800">
              Future-Ready Features
            </Typography>
            <Typography variant="body1" className="text-gray-700">
              React is evolving with features like concurrent rendering, React
              Server Components, and compiler-based optimizations, ensuring it
              remains relevant for modern web development.
            </Typography>
          </li>
        </ul>
      </Card>
    </Container>
  );
}

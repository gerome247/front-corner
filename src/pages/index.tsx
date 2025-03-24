import Head from "next/head";
import {
  Typography,
  Card,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import { AppBar, Toolbar, Tabs, Tab, Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { flashcardsMD } from "@/markdown/flashcards";
import { reactPositivesMd } from "@/markdown/reactPositives";
import ReactPositives from "@/components/ReactPositives";

function TabPanel(props: {
  children?: React.ReactNode;
  index: number;
  value: number;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Home() {
  const [value, setValue] = React.useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    setIsClient(true);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>React positives</title>
      </Head>

      {/* Header Section */}
      <AppBar position="static" className="bg-blue-500">
        <Toolbar>
          <Typography
            variant="h6"
            as="div"
            className="flex-grow font-bold text-white"
          >
            Frontend Corner
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Tabs Section */}
      <Container className="mb-12 mt-8">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="border-b border-gray-300"
        >
          <Tab label="React Positives" className="font-medium text-blue-500" />
          <Tab label="Client Server" className="font-medium text-blue-500" />
          <Tab
            label="React & Microsoft resources"
            className="font-medium text-blue-500"
          />
          <Tab label="Summary" className="font-medium text-blue-500" />
          {/* <Tab label="Flashcards" className="font-medium text-blue-500" /> */}
        </Tabs>

        {/* Tab Panels */}
        <TabPanel value={value} index={0}>
          <Card className="mb-8 border border-gray-200 p-6 shadow-md">
            {isClient && ( // Ensure ReactMarkdown only renders on the client
              <ReactMarkdown
                components={{
                  h1: ({ node, children, ...props }) => (
                    <Typography
                      variant="h4"
                      className="mb-4 mt-6 text-2xl font-bold text-blue-500"
                      {...(props as any)}
                    >
                      {children}
                    </Typography>
                  ),
                  h2: ({ node, children, ...props }) => (
                    <Typography
                      variant="h5"
                      className="mb-3 mt-4 text-xl font-semibold"
                      {...(props as any)}
                    >
                      {children}
                    </Typography>
                  ),
                  p: ({ node, children, ...props }) => (
                    <Typography
                      variant="body1"
                      className="mb-4 text-gray-700"
                      {...(props as any)}
                    >
                      {children}
                    </Typography>
                  ),
                  li: ({ node, children, ...props }) => (
                    <Typography
                      component="li"
                      variant="body1"
                      className="mb-2 ml-6 list-disc text-gray-700"
                      {...(props as any)}
                    >
                      {children}
                    </Typography>
                  ),
                }}
              >
                {reactPositivesMd}
              </ReactMarkdown>
            )}
          </Card>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Card className="mb-8 border border-gray-200 p-6 shadow-md">
            <Typography
              variant="h5"
              className="mb-4 font-semibold text-blue-500"
            >
              Client Server (backend - frontend)
            </Typography>
            <Typography className="mb-4 text-gray-700">
              The client-server model is a distributed application structure
              that partitions tasks between providers of resources or services
              (servers - backend) and requesters (clients - frontend).
            </Typography>
            {/* Embed the iframe */}
            <div className="mt-6">
              <iframe
                src="https://app.excalidraw.com/s/3n0YJYNukue/51XR1s8RK46"
                title="Client Server Diagram"
                className="h-96 w-full rounded-md border border-gray-300"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Card className="mb-8 border border-gray-200 p-6 shadow-md">
            <Typography
              variant="h5"
              className="mb-4 font-semibold text-blue-500"
            >
              Microsoft integration resources
            </Typography>
            <Typography className="mb-4 text-gray-700">
              React can be integrated with Office 365 to build custom add-ins
              and enhance productivity by leveraging Microsoft Graph APIs.
            </Typography>
            {/* Add spacing between list items */}
            <ul className="marker:text-secondary space-y-6">
              <li className="break-words">
                <Typography variant="h6" className="font-semibold">
                  Fluent UI React
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  Microsoft’s official UI framework for building experiences
                  that integrate with Microsoft 365, including Office Add-ins,
                  is based on React (Fluent UI React v9). This indicates a
                  significant investment in React for front-end development.
                </Typography>
              </li>
              <li className="break-words">
                <Typography variant="h6" className="font-semibold">
                  SharePoint Framework (SPFx)
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  Introduced for modern SharePoint development, SPFx uses React
                  by default in its project templates, and Microsoft has
                  prioritized React-based components in its Office UI Fabric
                  (now part of Fluent UI). While SPFx supports other frameworks
                  like Angular, the documentation and samples heavily lean
                  toward React.
                </Typography>
              </li>
              <li className="break-words">
                <Typography variant="h6" className="font-semibold">
                  Internal Usage
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  Microsoft has adopted React for parts of its own products,
                  such as Teams, Outlook web components, and portions of Office
                  Online, reflecting an internal preference.
                </Typography>
              </li>
              <li className="break-words">
                <Typography variant="h6" className="font-semibold">
                  Power BI Developer Samples
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  Microsoft provides a collection of{" "}
                  <a
                    href="https://github.com/microsoft/PowerBI-Developer-Samples"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Power BI Developer Samples
                  </a>{" "}
                  that demonstrate how to use React to embed Power BI reports,
                  dashboards, and tiles into applications. These samples
                  showcase React's flexibility in integrating with Microsoft's
                  analytics tools.
                </Typography>
              </li>
              <li className="break-words">
                <Typography variant="h6" className="font-semibold">
                  Fluent UI React Styles Handbook
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  Microsoft provides a{" "}
                  <a
                    href="https://github.com/microsoft/fluentui/blob/82cc27f5d68ca2fa30d906cd50889771e7a18ba8/docs/react-v9/contributing/rfcs/react-components/styles-handbook.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Fluent UI React Styles Handbook
                  </a>{" "}
                  that outlines best practices for styling React components in
                  Fluent UI React v9. This resource is invaluable for developers
                  building consistent and accessible user interfaces.
                </Typography>
              </li>
              <li className="break-words">
                <Typography variant="h6" className="font-semibold">
                  Fluent UI React Developer Styling Components
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  Learn more about{" "}
                  <a
                    href="https://react.fluentui.dev/?path=/docs/concepts-developer-styling-components--page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Fluent UI React Developer Styling Components
                  </a>{" "}
                  to understand how to style components effectively in Fluent UI
                  React. This documentation provides detailed guidance for
                  developers.
                </Typography>
              </li>
              <li className="break-words">
                <Typography variant="h6" className="font-semibold">
                  Griffel
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  Explore{" "}
                  <a
                    href="https://griffel.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Griffel
                  </a>
                  , a CSS-in-JS styling library used by Fluent UI React v9.
                  Griffel provides powerful and flexible styling capabilities
                  for building modern React applications.
                </Typography>
              </li>
              <li className="break-words">
                <Typography variant="h6" className="font-semibold">
                  Microsoft Fabric Workload Development Sample
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  Check out the{" "}
                  <a
                    href="https://github.com/microsoft/Microsoft-Fabric-workload-development-sample"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Microsoft Fabric Workload Development Sample
                  </a>{" "}
                  to explore how React can be used to build workload-specific
                  applications in Microsoft Fabric. This sample provides
                  practical insights and examples for developers.
                </Typography>
              </li>
              <li className="break-words">
                <Typography variant="h6" className="font-semibold">
                  Fluent UI Official Documentation
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  Visit the{" "}
                  <a
                    href="https://developer.microsoft.com/en-us/fluentui#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Fluent UI Official Documentation
                  </a>{" "}
                  to explore comprehensive resources, examples, and guides for
                  using Fluent UI in your projects.
                </Typography>
              </li>
            </ul>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Card className="mb-8 border border-gray-200 p-6 text-blue-500 shadow-md">
            <Typography variant="h5" className="mb-4 font-semibold">
              Summary
            </Typography>
            <ReactPositives />
          </Card>
        </TabPanel>
        {/* New Flashcards Tab Panel */}
        {/* <TabPanel value={value} index={4}>
          <Card className="mb-8 border border-gray-200 p-6 shadow-md">
            <Typography variant="h5" className="mb-4 font-semibold">
              Flashcards
            </Typography>
            {isClient && (
              <ReactMarkdown
                components={{
                  h1: ({ node, children, ...props }) => (
                    <Typography
                      variant="h4"
                      className="mb-4 mt-6 text-2xl font-bold"
                      {...(props as any)}
                    >
                      {children}
                    </Typography>
                  ),
                  h2: ({ node, children, ...props }) => (
                    <Typography
                      variant="h5"
                      className="mb-3 mt-4 text-xl font-semibold"
                      {...(props as any)}
                    >
                      {children}
                    </Typography>
                  ),
                  p: ({ node, children, ...props }) => {
                    const text =
                      Array.isArray(children) && typeof children[0] === "string"
                        ? children[0]
                        : "";

                    // Check if the paragraph contains a question or answer
                    if (text.startsWith("**Q:**")) {
                      return (
                        <Typography
                          variant="body1"
                          className="mb-2 font-semibold text-gray-800"
                          {...(props as any)}
                        >
                          {text.replace("**Q:**", "Q:")}
                        </Typography>
                      );
                    } else if (text.startsWith("**A:**")) {
                      return (
                        <Typography
                          variant="body1"
                          className="mb-4 text-gray-700"
                          {...(props as any)}
                        >
                          {text.replace("**A:**", "A:")}
                        </Typography>
                      );
                    }

                    // Default rendering for other paragraphs
                    return (
                      <Typography
                        variant="body1"
                        className="mb-4 text-gray-700"
                        {...(props as any)}
                      >
                        {children}
                      </Typography>
                    );
                  },
                  li: ({ node, children, ...props }) => (
                    <Typography
                      component="li"
                      variant="body1"
                      className="mb-2 ml-6 list-disc text-gray-700"
                      {...(props as any)}
                    >
                      {children}
                    </Typography>
                  ),
                }}
              >
                {flashcardsMD}
              </ReactMarkdown>
            )}
          </Card>
        </TabPanel> */}
      </Container>

      {/* Footer Section */}
      <Box
        component="footer"
        className="border-t border-gray-300 bg-gray-100 px-4 py-6 text-center"
      >
        <Container maxWidth="sm">
          <Typography className="text-gray-600">
            Frontend Corner © 2025. Built in React, Next.js and Material
            Tailwind.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

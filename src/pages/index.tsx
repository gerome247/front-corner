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
        <title>Material Tailwind + Next.js + TS</title>
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
            label="React and Office 365"
            className="font-medium text-blue-500"
          />
          <Tab label="Summary" className="font-medium text-blue-500" />
          <Tab label="Flashcards" className="font-medium text-blue-500" />
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
            <Typography variant="h5" className="mb-4 font-semibold">
              Client Server
            </Typography>
            <Typography className="text-gray-700">
              The client-server model is a distributed application structure
              that partitions tasks between providers of resources or services
              (servers) and requesters (clients).
            </Typography>
          </Card>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Card className="mb-8 border border-gray-200 p-6 shadow-md">
            <Typography variant="h5" className="mb-4 font-semibold">
              React and Office 365
            </Typography>
            <Typography className="text-gray-700">
              React can be integrated with Office 365 to build custom add-ins
              and enhance productivity by leveraging Microsoft Graph APIs.
            </Typography>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Card className="mb-8 border border-gray-200 p-6 shadow-md">
            <Typography variant="h5" className="mb-4 font-semibold">
              Summary
            </Typography>
            <Typography className="mb-4 flex items-center">
              <span className="inline-flex items-center text-blue-400">
                <FaReact />
              </span>
              <span className="ml-2">
                React is a powerful library for building user interfaces. It
                promotes component-based architecture, making code reusable and
                easier to maintain.
              </span>
            </Typography>
          </Card>
        </TabPanel>
        {/* New Flashcards Tab Panel */}
        <TabPanel value={value} index={4}>
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
        </TabPanel>
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

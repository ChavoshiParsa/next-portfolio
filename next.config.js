/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_string_connection:
          "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.2",
      },
    };
  }
  return {
    env: {
      mongodb_string_connection:
        "mongodb+srv://ParsaChavoshi:490118241@cluster0.w7q66oa.mongodb.net/?retryWrites=true&w=majority",
    },
  };
};

module.exports = nextConfig;

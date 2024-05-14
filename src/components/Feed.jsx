import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI, getVideoApi, getVideoTypeIdApi } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import { useParams } from "react-router-dom";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  const params = useParams();

  useEffect(() => {
    
    if (params.id) {
      // params.id => API BE => localhost:8080/api/video/get-video-typeid/{params.id}
      getVideoTypeIdApi(params.id).then(result => {

        setVideos(result);
      }).catch(error => console.log(error));

    } else {

      getVideoApi().then(result => {

        setVideos(result);

      }).catch(error => console.log(error));

    }

  }, [params.id]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2050 Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;

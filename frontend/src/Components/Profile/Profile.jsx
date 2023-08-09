import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackSpaceIcon from "@mui/icons-material/KeyboardBackspace";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");

  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleOpenProfileModel = () => {
    console.log("Open Profile Model");
  };
  const handleFollowUser = () => {
    console.log("Handle Follow User");
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    if (newValue === 4) {
      console.log("Likes Twit");
    } else if (newValue === 1) {
      console.log("Users Twits");
    }
  };
  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0  bg-opacity-95`}>
        <KeyboardBackSpaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          Code With Zosh
        </h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2023/07/25/19/47/milky-way-8149815_640.jpg"
          alt=""
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="code with zosh"
            src="https://res.cloudinary.com/dnbw04gbs/image/upload/v1690639851/instagram%20post/bywtgh9vj4e80aywstss.png"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "UnFollow"}
            </Button>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Code With Zosh</h1>

            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://abs.twing.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png"
                alt=""
              />
            )}
          </div>
          <h1 className="text-gray-500">@codewithzosh</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>
            Hello, I'm code with zosh,you will find full stack project tutorial
            in our websites
          </p>

          <div className="flex items-center text-gray-500">
            <BusinessCenterIcon />
            <p className="ml-2">Education</p>
          </div>
          <div className="flex items-center text-gray-500">
            <LocationOnIcon />
            <p className="ml-2">Indian</p>
          </div>

          <div className="flex items-center text-gray-500">
            <CalendarMonthIcon />
            <p className="ml-2">Joined Jun 2022</p>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1 font-semibold">
            <span>190</span>
            <span className="text-gray-500">Following</span>
          </div>

          <div className="flex items-center space-x-1 font-semibold">
            <span>500</span>
            <span className="text-gray-500">Followers</span>
          </div>
        </div>
      </section>

      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>

            <TabPanel value="1"> User Tweets</TabPanel>
            <TabPanel value="2">User Replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>
    </div>
  );
};

export default Profile;

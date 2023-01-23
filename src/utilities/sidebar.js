import styled, { css } from "styled-components";
import { ReactComponent as home } from "../assets/icons/home-fill.svg";

const Icons = styled.div``;

const common = css`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

Icons.Home = styled(home)`
  ${common};
`;

export const sidebar = [
  {
    id: 1,
    data: [
      {
        id: 1,
        title: "Home",
        icon: Icons.Home,
      },
      {
        id: 2,
        title: "Shorts",
        icon: Icons.Home,
      },
      {
        id: 3,
        title: "Subscriptions",
        icon: Icons.Home,
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        id: 1,
        title: "Library",
        icon: Icons.Home,
      },
      {
        id: 2,
        title: "History",
        icon: Icons.Home,
      },
      {
        id: 3,
        title: "Watch later",
        icon: Icons.Home,
      },
      {
        id: 4,
        title: "Liked videos",
        icon: Icons.Home,
      },
    ],
  },
  {
    id: 3,
    title: "Subscriptions",
    data: [
      {
        id: 1,
        title: "Music",
        icon: Icons.Home,
      },
      {
        id: 2,
        title: "Sports",
        icon: Icons.Home,
      },
      {
        id: 3,
        title: "Gaming",
        icon: Icons.Home,
      },
      {
        id: 4,
        title: "News",
        icon: Icons.Home,
      },
    ],
  },

  {
    id: 4,
    title: "Explore",
    data: [
      {
        id: 1,
        title: "Trending",
        icon: Icons.Home,
      },
      {
        id: 2,
        title: "Music",
        icon: Icons.Home,
      },
      {
        id: 3,
        title: "Live",
        icon: Icons.Home,
      },
      {
        id: 4,
        title: "Gaming",
        icon: Icons.Home,
      },
      {
        id: 5,
        title: "News",
        icon: Icons.Home,
      },
      {
        id: 6,
        title: "Sports",
        icon: Icons.Home,
      },
      {
        id: 7,
        title: "Learning",
        icon: Icons.Home,
      },
      {
        id: 8,
        title: "Fashion & Beauty",
        icon: Icons.Home,
      },
    ],
  },
  {
    id: 5,
    data: [
      {
        id: 1,
        title: "Settings",
        icon: Icons.Home,
      },
      {
        id: 2,
        title: "Report history",
        icon: Icons.Home,
      },
      {
        id: 3,
        title: "Help",
        icon: Icons.Home,
      },
      {
        id: 4,
        title: "Send feedback",
        icon: Icons.Home,
      },
    ],
  },
];

import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "hat",
          imageUrl:
            "https://imgs.search.brave.com/tZg59L5Y9AQmwYAF_6htnx483PBEZWSjJzMu_EbdMc4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFMWFZYYTVHY0wu/anBn",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl:
            "https://imgs.search.brave.com/vH5fcdTA4XzBs3IT4OorzlN4xxdyIXoJzn7SXpN3LSw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zY2hh/ZWZlcm91dGZpdHRl/ci5jb20vY2RuL3No/b3AvcHJvZHVjdHMv/NTIwX2hheWRlbi1q/YWNrZXRfcnVzc2V0/X29wZW4tbGVmdC5q/cGc_dj0xNjcwNjA2/NTE1JndpZHRoPTEw/MDA",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl:
            "https://imgs.search.brave.com/U_DQb0X-5xCUhQkROjouJSKHN5hXK7oohJM81WXHriQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aGlnaHNub2JpZXR5/LmNvbS9zdGF0aWMt/YXNzZXRzL2RhdG8v/MTYzMjUxMjQ1Mi1h/ZGlkYXMteWVlenkt/Z3VpZGUtd2F2ZS1y/dW5uZXItbWFpbi0y/LmpwZw",
          id: 3,
        },
        {
          title: "womens",
          imageUrl:
            "https://imgs.search.brave.com/b1ahMU2pLyzsnsKXgzFT4kHFFNAQQFdFFCWjWyKYB8I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/NjM1MzI5Ny9waG90/by9mYXNoaW9uYWJs/ZS13b21hbi1pbi1y/ZXRyby1zdHlsZS1j/bG90aGVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1tTmdw/SVFkUjM2OUxWYUk3/RGZTV0k2YXRCWVE2/SVMtQi1aSWR0dXlv/ZUNZPQ",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl:
            "https://imgs.search.brave.com/nDLlYS5lk-7Gp-GAT45jI5YyrRm9F-yfVxBNT1FU-68/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8yMDk3NTMx/LzIxNDQvaS82MDAv/ZGVwb3NpdHBob3Rv/c18yMTQ0MDMxMy1z/dG9jay1waG90by1h/dHRyYWN0aXZlLW1h/bi1kcmVzc2VkLWNh/c3VhbC13ZWFyaW5n/LmpwZw",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;

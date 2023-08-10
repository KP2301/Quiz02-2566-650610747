"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { comments } from "@/libs/comments";
import { Reply } from "@/components/Reply";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          name="Kittiwin Phannachet"
          img="/profileImages/650610747.jpg"
          id="650610747"
          detail="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum="100"
        />

        {/* map-loop render Comment component here */}
        {comments.map((Com) => (
          <Comment
            key={Com.likeNum}
            userImagePath={Com.userImagePath}
            username={Com.username}
            commentText={Com.commentText}
            likeNum={Com.likeNum}
            replies={Com.replies}
          />
        ))}
      </div>
    </div>
  );
}

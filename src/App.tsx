import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import "./App.css"
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col items-center justify-center p-4 bg-gradient">
      <Card className="w-full max-w-3xl bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300 background-[#DBBEA1]">
        <CardContent className="p-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <img 
              src="/Head1.png" 
              alt="Emre Hayirci"
              className="logo w-48 h-48 rounded-full object-cover border-4 border-black shadow-lg"
            />
          </div>

          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-6xl font-bold mb-3 text-black name-text">Emre Hayirci</h1>
            <h2 className="text-3xl text-black title-text">Software Engineer</h2>
          </div>

          {/* Bio Section */}
          <div className="mb-10 text-gray-700 leading-relaxed">
            <p className="mb-6 text-lg">
              I'm a versatile software engineer who loves diving into new challenges, whether crafting efficient data pipelines, 
              building full-stack applications, or exploring AI solutions. My superpower? Quickly adapting to new technologies 
              and domains while keeping users at the heart of everything I make.
            </p>
          </div>

          {/* Button Section */}
          <div className="flex flex-col items-center gap-8">
            {/* Blog Button */}
            <Button 
              className="w-full max-w-md bg-black hover:bg-[#ff9900] text-white py-6 text-xl font-semibold rounded-full transform transition-all duration-300 hover:scale-105 shadow-md title-text"
              onClick={() => window.open('https://emrehayirci.substack.com?utm_source=hayirci.com&utm_medium=page&utm_campaign=directlink&utm_id=blog', '_blank')}
            >
              <BookOpen className="mr-3 h-6 w-6" />
              Read My Blog
            </Button>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <Button 
                variant="outline" 
                size="icon"
                className="w-14 h-14 rounded-full bg-black hover:bg-[#2ecc71] border-none text-white transform transition-all duration-300 hover:scale-110 shadow-md"
                onClick={() => window.open('https://www.linkedin.com/in/emreanil', '_blank')}
              >
                <Linkedin className="h-6 w-6" />
              </Button>

              <Button 
                variant="outline" 
                size="icon"
                className="w-14 h-14 rounded-full bg-black hover:bg-[#2ecc71] border-none text-white transform transition-all duration-300 hover:scale-110 shadow-md"
                onClick={() => window.open('https://github.com/emrehayirci', '_blank')}
              >
                <Github className="h-6 w-6" />
              </Button>

              <Button 
                variant="outline" 
                size="icon"
                className="w-14 h-14 rounded-full bg-black hover:bg-[#2ecc71] border-none text-white transform transition-all duration-300 hover:scale-110 shadow-md"
                onClick={() => window.open('mailto:emre@hayirci.com')}
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;
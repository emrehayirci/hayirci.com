import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Emre Hayirci"
              className="w-48 h-48 rounded-full object-cover border-4 border-[#3498db] shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold mb-3 text-[#3498db]">Emre Hayirci</h1>
            <h2 className="text-2xl text-[#2ecc71]">Software Engineer</h2>
          </div>

          {/* Bio Section */}
          <div className="mb-10 text-gray-700 leading-relaxed">
            <p className="mb-6 text-lg">
              I'm a versatile software engineer who loves diving into new challenges, whether crafting efficient data pipelines, 
              building full-stack applications, or exploring AI solutions. My superpower? Quickly adapting to new technologies 
              and domains while keeping users at the heart of everything I make.
            </p>
            <p className="text-lg">
              I thrive in agile environments, where I can collaborate with diverse teams to turn data insights into features 
              that make a real difference in users' lives. While I geek out about technical excellence, what really drives me 
              is seeing how our solutions solve actual problems.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {['React', 'JS', 'TS', 'Docker', 'Kubernetes', 'AWS', 'Spark', 'Python', 'Unity', 'Airflow'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 rounded-full text-base bg-[#3498db] text-white font-medium hover:bg-[#2ecc71] transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Button Section */}
          <div className="flex flex-col items-center gap-8">
            {/* Blog Button */}
            <Button 
              className="w-full max-w-md bg-[#ff9900] hover:bg-[#3498db] text-white py-6 text-xl font-semibold rounded-full transform transition-all duration-300 hover:scale-105 shadow-md"
              onClick={() => window.open('/blog', '_blank')}
            >
              <BookOpen className="mr-3 h-6 w-6" />
              Read My Blog
            </Button>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <Button 
                variant="outline" 
                size="icon"
                className="w-14 h-14 rounded-full bg-[#3498db] hover:bg-[#2ecc71] border-none text-white transform transition-all duration-300 hover:scale-110 shadow-md"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="h-6 w-6" />
              </Button>

              <Button 
                variant="outline" 
                size="icon"
                className="w-14 h-14 rounded-full bg-[#3498db] hover:bg-[#2ecc71] border-none text-white transform transition-all duration-300 hover:scale-110 shadow-md"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="h-6 w-6" />
              </Button>

              <Button 
                variant="outline" 
                size="icon"
                className="w-14 h-14 rounded-full bg-[#3498db] hover:bg-[#2ecc71] border-none text-white transform transition-all duration-300 hover:scale-110 shadow-md"
                onClick={() => window.open('mailto:your.email@example.com')}
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
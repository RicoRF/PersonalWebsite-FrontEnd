"use client";

import { useEffect, useState } from "react";
import LinkedInProfile from "@/app/components/LinkedIn/LinkedInProfile";
import Experience from "@/app/components/LinkedIn/Experience";
import Education from "@/app/components/LinkedIn/Education";
import Skills from "@/app/components/LinkedIn/Skills";
import Languages from "@/app/components/LinkedIn/Languages";
import Recommendations from "@/app/components/LinkedIn/Recommendations";
import Certifications from "@/app/components/LinkedIn/Certifications";

export default function LinkedInPage() {
  const [data, setData] = useState<{
    profile: { name: string; headline: string; location: string };
    experiences: Array<{ id: number; title: string; company: string; duration: string }>;
    education: Array<{ id: number; schoolName: string; degree: string; duration: string }>;
    skills: string[];
    languages: string[];
    recommendations: Array<{ id: number; author: string; text: string }>;
    certifications: Array<{ id: number; name: string; organization: string; issuedDate: string }>;
  } | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinkedInData = async () => {
      try {
        const response = await fetch("http://localhost:8000/linkedin");
        if (!response.ok) throw new Error("Failed to fetch LinkedIn data");

        const result = await response.json();

        // Transform the API response to match the expected structure
        const transformedData = {
          profile: {
            name: `${result.data.person.firstName} ${result.data.person.lastName}`,
            headline: result.data.person.headline,
            location: result.data.person.location,
          },
          experiences: result.data.person.positions.positionHistory.map((position: any) => ({
            id: position.linkedInId || Math.random(),
            title: position.title,
            company: position.companyName,
            duration: `${position.startEndDate.start.month}/${position.startEndDate.start.year} - ${
              position.startEndDate.end
                ? `${position.startEndDate.end.month}/${position.startEndDate.end.year}`
                : "Present"
            }`,
          })),
          education: result.data.person.schools.educationHistory.map((school: any) => ({
            id: school.schoolName,
            schoolName: school.schoolName,
            degree: school.degreeName,
            duration: `${school.startEndDate.start.month}/${school.startEndDate.start.year} - ${
              school.startEndDate.end
                ? `${school.startEndDate.end.month}/${school.startEndDate.end.year}`
                : "Present"
            }`,
          })),
          skills: result.data.person.skills,
          languages: result.data.person.languages,
          recommendations: result.data.person.recommendations.recommendationHistory.map(
            (rec: any) => ({
              id: rec.authorFullname,
              author: rec.authorFullname,
              text: rec.description,
            })
          ),
          certifications: result.data.person.certifications.certificationHistory.map(
            (cert: any) => ({
              id: cert.name,
              name: cert.name,
              organization: cert.organizationName,
              issuedDate: cert.issuedDate,
            })
          ),
        };

        setData(transformedData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLinkedInData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>LinkedIn Data</h1>
      {data && (
        <>
          <LinkedInProfile profile={data.profile} />
          <Experience experiences={data.experiences} />
          <Education education={data.education} />
          <Skills skills={data.skills} />
          <Languages languages={data.languages} />
          <Recommendations recommendations={data.recommendations} />
          <Certifications certifications={data.certifications} />
        </>
      )}
    </div>
  );
}

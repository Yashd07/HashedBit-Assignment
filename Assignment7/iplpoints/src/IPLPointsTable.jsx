import React, { useEffect, useState } from 'react';

const IPLPointsTable = () => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                // Sort data by NRR in ascending order
                const sortedTeams = data.sort((a, b) => a.NRR - b.NRR);
                setTeams(sortedTeams);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-danger">{error}</div>;

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">IPL Points Table 2022</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Team</th>
                        <th>Matches Played</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Ties</th>

                        <th>NRR</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={team.Team}>
                            <td>{index + 1}</td>
                            <td>{team.Team}</td>
                            <td>{team.Matches}</td>
                            <td>{team.Won}</td>
                            <td>{team.Lost}</td>
                            <td>{team.Tied}</td>
                            <td>{team.NRR}</td>
                            <td>{team.Points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IPLPointsTable;

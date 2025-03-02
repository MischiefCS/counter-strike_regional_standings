### Roster Details<br />
Team Name: Glitchtech Esports<br />
Roster: ifan, isaac, MMS, Rhys, Ziimzey<br />
Global Rank: [479](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [299]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  559.8<br />
<br />
Final Rank Value (559.8) = Starting Rank Value (555.1) + Head To Head Adjustments (4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.126[<sup>2</sup>](#table1)

The average of these factors is 0.078<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.1
- 400 + ( ( 0.078 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 555.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      201 | 2025-02-22 | Viperio Academy         | L   | 1.000      | -            | -                | -                | -         |   -14.31 | ifan, isaac, MMS, Rhys, Ziimzey     |
|            6 |      215 | 2025-02-21 | Submissive and Readable | W   | 1.000      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     8.62 | ifan, isaac, MMS, Rhys, Ziimzey     |
|            5 |     3600 | 2024-11-07 | ROYALS                  | L   | 0.447      | -            | -                | -                | -         |    -3.64 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |
|            4 |     3607 | 2024-11-07 | ALASKA                  | L   | 0.446      | -            | -                | -                | -         |    -0.26 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |
|            3 |     3645 | 2024-11-06 | Annex Esports           | W   | 0.440      | 1.000        | 0.000 (0.000)    | 0.064 (0.028)    | 0 (0.000) |     8.56 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |
|            2 |     3697 | 2024-11-05 | Dreams To Legends       | W   | 0.433      | 1.000        | 0.000 (0.000)    | 0.090 (0.039)    | 0 (0.000) |     8.53 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |
|            1 |     3748 | 2024-11-04 | Belfast Storm           | L   | 0.427      | -            | -                | -                | -         |    -2.74 | ifan, maddeN, Rhys, Yoshwa, Ziimzey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

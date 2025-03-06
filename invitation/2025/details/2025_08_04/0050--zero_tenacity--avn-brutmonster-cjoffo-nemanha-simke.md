### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Global Rank: [50](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [35]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  508.6<br />
<br />
Final Rank Value (508.6) = Starting Rank Value (508.2) + Head To Head Adjustments (0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.2
- 400 + ( ( 0.041 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 508.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      339 | 2025-02-11 | Astralis                   | L   | 0.037      | -            | -                | -                | -         |     0.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |      362 | 2025-02-10 | NEVERMORE (Ukrainian team) | W   | 0.032      | 0.143        | 0.000 (0.000)    | 0.057 (0.000)    | 0 (0.000) |     0.36 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |      370 | 2025-02-10 | HEROIC                     | L   | 0.030      | -            | -                | -                | -         |    -0.39 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |      428 | 2025-02-08 | Little Red Door            | W   | 0.019      | 0.143        | 0.000 (0.000)    | 0.028 (0.000)    | 0 (0.000) |     0.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |      444 | 2025-02-08 | BC.Game Esports            | L   | 0.019      | -            | -                | -                | -         |    -0.05 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |      449 | 2025-02-08 | ENCE                       | W   | 0.018      | 0.143        | 0.033 (0.000)    | 0.155 (0.000)    | 0 (0.000) |     0.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |      465 | 2025-02-08 | RUSH B (Russian team)      | L   | 0.017      | -            | -                | -                | -         |    -0.25 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

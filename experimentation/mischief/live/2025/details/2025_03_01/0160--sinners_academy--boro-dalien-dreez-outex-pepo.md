### Roster Details<br />
Team Name: SINNERS Academy<br />
Roster: BORO, DALIEN, dreez, outex, Pepo<br />
Global Rank: [160](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [110]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  707.3<br />
<br />
Final Rank Value (707.3) = Starting Rank Value (724.7) + Head To Head Adjustments (-17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.114[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.7
- 400 + ( ( 0.166 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 724.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1669 | 2024-12-08 | NEVERMORE (Ukrainian team) | L   | 0.647      | -            | -                | -                | -         |    -8.49 | BORO, DALIEN, dreez, outex, Pepo |
|            9 |     1990 | 2024-12-02 | LEON Esports               | L   | 0.606      | -            | -                | -                | -         |    -9.86 | BORO, DALIEN, dreez, outex, Pepo |
|            8 |     2130 | 2024-11-30 | Metizport X                | W   | 0.593      | 0.333        | 0.001 (0.000)    | 0.178 (0.035)    | 0 (0.000) |     7.66 | BORO, DALIEN, dreez, outex, Pepo |
|            7 |     2204 | 2024-11-28 | SkyFury                    | W   | 0.581      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.65 | BORO, DALIEN, dreez, outex, Pepo |
|            6 |     2452 | 2024-11-22 | BRUTE                      | L   | 0.538      | -            | -                | -                | -         |    -9.13 | BORO, DALIEN, dreez, outex, Pepo |
|            5 |     2693 | 2024-11-15 | Dusty Roots                | L   | 0.492      | -            | -                | -                | -         |    -7.04 | BORO, DALIEN, outex, Pepo, STYKO |
|            4 |     2700 | 2024-11-15 | Partizan Esports           | W   | 0.491      | 0.617        | 0.081 (0.025)    | 0.525 (0.159)    | 1 (0.491) |    13.63 | BORO, DALIEN, outex, Pepo, STYKO |
|            3 |     2709 | 2024-11-14 | Kitsune Esports            | W   | 0.488      | 0.617        | 0.001 (0.000)    | 0.103 (0.031)    | 1 (0.488) |     4.98 | BORO, DALIEN, outex, Pepo, STYKO |
|            2 |     2750 | 2024-11-13 | Team Czech Republic        | L   | 0.480      | -            | -                | -                | -         |    -9.56 | BORO, DALIEN, outex, Pepo, STYKO |
|            1 |     2755 | 2024-11-13 | The Huns Esports           | L   | 0.480      | -            | -                | -                | -         |    -2.28 | BORO, DALIEN, outex, Pepo, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($340.25)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.552 | $616.62        | $340.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

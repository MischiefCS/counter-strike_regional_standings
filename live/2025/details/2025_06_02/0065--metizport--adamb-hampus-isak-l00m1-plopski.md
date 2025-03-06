### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hampus, isak, L00m1, Plopski<br />
Global Rank: [65](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [43]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  716.1<br />
<br />
Final Rank Value (716.1) = Starting Rank Value (719.6) + Head To Head Adjustments (-3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.6
- 400 + ( ( 0.138 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 719.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      333 | 2025-02-11 | HEROIC            | L   | 0.458      | -            | -                | -                | -         |    -2.11 | adamb, hampus, isak, L00m1, Plopski |
|           14 |      342 | 2025-02-11 | Nemiga Gaming     | W   | 0.456      | 0.143        | 0.011 (0.001)    | 0.243 (0.016)    | 0 (0.000) |     7.56 | adamb, hampus, isak, L00m1, Plopski |
|           13 |      360 | 2025-02-10 | GamerLegion       | L   | 0.452      | -            | -                | -                | -         |    -0.30 | adamb, hampus, isak, L00m1, Plopski |
|           12 |      369 | 2025-02-10 | Nexus Gaming      | W   | 0.450      | 0.143        | 0.017 (0.001)    | 0.130 (0.008)    | 0 (0.000) |     7.33 | adamb, hampus, isak, L00m1, Plopski |
|           11 |      560 | 2025-02-05 | Ninjas in Pyjamas | L   | 0.417      | -            | -                | -                | -         |    -9.84 | adamb, hampus, isak, L00m1, Plopski |
|           10 |      568 | 2025-02-05 | Passion UA        | L   | 0.416      | -            | -                | -                | -         |    -5.86 | adamb, hampus, isak, L00m1, Plopski |
|            9 |      684 | 2025-01-15 | Team Vitality     | L   | 0.279      | -            | -                | -                | -         |    -0.02 | adamb, hampus, isak, L00m1, Plopski |
|            8 |      763 | 2024-12-22 | P0RTUGAL          | L   | 0.119      | -            | -                | -                | -         |    -1.83 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            7 |      765 | 2024-12-22 | Zero Tenacity     | W   | 0.118      | 0.143        | 0.002 (0.000)    | 0.391 (0.007)    | 0 (0.000) |     1.67 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            6 |      875 | 2024-12-14 | 9INE              | L   | 0.064      | -            | -                | -                | -         |    -0.83 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            5 |      902 | 2024-12-13 | Monte             | W   | 0.057      | 0.435        | 0.005 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     0.81 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            4 |      931 | 2024-12-11 | Insilio           | W   | 0.043      | 0.435        | 0.000 (0.000)    | 0.173 (0.003)    | 0 (0.000) |     0.32 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            3 |      944 | 2024-12-10 | Chimera Esports   | L   | 0.036      | -            | -                | -                | -         |    -0.61 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            2 |      968 | 2024-12-08 | FLuffy Gangsters  | W   | 0.022      | 0.435        | 0.000 (0.000)    | 0.073 (0.001)    | 0 (0.000) |     0.15 | adamb, L00m1, nilo, Plopski, SHiNE  |
|            1 |     1038 | 2024-12-05 | Fire Flux Esports | W   | 0.003      | 0.435        | 0.001 (0.000)    | 0.784 (0.001)    | 0 (0.000) |     0.05 | adamb, L00m1, nilo, Plopski, SHiNE  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($917.53)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      0.119 | $6,518.90      | $775.03         |
| 2024-12-15 |      0.071 | $2,000.00      | $142.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

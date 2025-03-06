### Roster Details<br />
Team Name: Partizan Esports<br />
Roster: c0llins, Dragon, Kind0, maden, VLDN<br />
Global Rank: [31](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [22]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  830.4<br />
<br />
Final Rank Value (830.4) = Starting Rank Value (831.0) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.455[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 831.0
- 400 + ( ( 0.175 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 831.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      116 | 2025-02-22 | BC.Game Esports | L   | 0.297      | -            | -                | -                | -         |    -3.35 | c0llins, Dragon, Kind0, maden, VLDN |
|            6 |      126 | 2025-02-21 | 9INE            | W   | 0.292      | 0.435        | 0.000 (0.000)    | 0.627 (0.080)    | 0 (0.000) |     1.63 | c0llins, Dragon, Kind0, maden, VLDN |
|            5 |      227 | 2025-02-15 | 500             | L   | 0.252      | -            | -                | -                | -         |    -2.80 | c0llins, Dragon, emi, Kind0, VLDN   |
|            4 |      243 | 2025-02-15 | ENCE            | W   | 0.251      | 0.435        | 0.026 (0.003)    | 0.260 (0.028)    | 0 (0.000) |     3.22 | c0llins, Dragon, emi, Kind0, VLDN   |
|            3 |      279 | 2025-02-14 | Nexus Gaming    | W   | 0.243      | 0.435        | 0.010 (0.001)    | 0.093 (0.010)    | 0 (0.000) |     1.66 | c0llins, Dragon, emi, Kind0, VLDN   |
|            2 |      316 | 2025-02-12 | Fnatic          | W   | 0.229      | 0.435        | 0.000 (0.000)    | 0.489 (0.049)    | 0 (0.000) |     1.50 | c0llins, Dragon, emi, Kind0, VLDN   |
|            1 |      455 | 2025-02-08 | BC.Game Esports | L   | 0.205      | -            | -                | -                | -         |    -2.46 | c0llins, Dragon, emi, Kind0, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,128.15)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $2,000.00      | $609.63         |
| 2025-02-15 |      0.252 | $10,000.00     | $2,518.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

### Roster Details<br />
Team Name: Partizan Esports<br />
Roster: c0llins, Dragon, Kind0, maden, VLDN<br />
Global Rank: [19](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [14]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  855.9<br />
<br />
Final Rank Value (855.9) = Starting Rank Value (856.5) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.490[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 856.5
- 400 + ( ( 0.174 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 856.5


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
|            7 |      116 | 2025-02-22 | BC.Game Esports | L   | 0.110      | -            | -                | -                | -         |    -1.39 | c0llins, Dragon, Kind0, maden, VLDN |
|            6 |      126 | 2025-02-21 | 9INE            | W   | 0.105      | 0.435        | 0.000 (0.000)    | 0.437 (0.020)    | 0 (0.000) |     0.42 | c0llins, Dragon, Kind0, maden, VLDN |
|            5 |      227 | 2025-02-15 | 500             | L   | 0.065      | -            | -                | -                | -         |    -0.81 | c0llins, Dragon, emi, Kind0, VLDN   |
|            4 |      243 | 2025-02-15 | ENCE            | W   | 0.064      | 0.435        | 0.033 (0.001)    | 0.155 (0.004)    | 0 (0.000) |     0.81 | c0llins, Dragon, emi, Kind0, VLDN   |
|            3 |      279 | 2025-02-14 | Nexus Gaming    | W   | 0.056      | 0.435        | 0.013 (0.000)    | 0.076 (0.002)    | 0 (0.000) |     0.39 | c0llins, Dragon, emi, Kind0, VLDN   |
|            2 |      316 | 2025-02-12 | Fnatic          | W   | 0.043      | 0.435        | 0.000 (0.000)    | 0.244 (0.005)    | 0 (0.000) |     0.20 | c0llins, Dragon, emi, Kind0, VLDN   |
|            1 |      455 | 2025-02-08 | BC.Game Esports | L   | 0.018      | -            | -                | -                | -         |    -0.23 | c0llins, Dragon, emi, Kind0, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($888.15)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $2,000.00      | $236.30         |
| 2025-02-15 |      0.065 | $10,000.00     | $651.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

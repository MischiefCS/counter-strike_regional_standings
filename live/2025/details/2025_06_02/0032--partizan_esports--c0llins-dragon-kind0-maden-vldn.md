### Roster Details<br />
Team Name: Partizan Esports<br />
Roster: c0llins, Dragon, Kind0, maden, VLDN<br />
Global Rank: [32](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [22]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  845.9<br />
<br />
Final Rank Value (845.9) = Starting Rank Value (839.0) + Head To Head Adjustments (6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 839.0
- 400 + ( ( 0.189 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 839.0


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
|            7 |      116 | 2025-02-22 | BC.Game Esports | L   | 0.530      | -            | -                | -                | -         |    -5.28 | c0llins, Dragon, Kind0, maden, VLDN |
|            6 |      126 | 2025-02-21 | 9INE            | W   | 0.525      | 0.435        | 0.020 (0.005)    | 0.787 (0.180)    | 0 (0.000) |     7.28 | c0llins, Dragon, Kind0, maden, VLDN |
|            5 |      227 | 2025-02-15 | 500             | L   | 0.485      | -            | -                | -                | -         |    -5.00 | c0llins, Dragon, emi, Kind0, VLDN   |
|            4 |      243 | 2025-02-15 | ENCE            | W   | 0.484      | 0.435        | 0.032 (0.007)    | 0.268 (0.056)    | 0 (0.000) |     6.19 | c0llins, Dragon, emi, Kind0, VLDN   |
|            3 |      279 | 2025-02-14 | Nexus Gaming    | W   | 0.476      | 0.435        | 0.017 (0.004)    | 0.130 (0.027)    | 0 (0.000) |     4.88 | c0llins, Dragon, emi, Kind0, VLDN   |
|            2 |      316 | 2025-02-12 | Fnatic          | W   | 0.463      | 0.435        | 0.000 (0.000)    | 0.480 (0.097)    | 0 (0.000) |     3.76 | c0llins, Dragon, emi, Kind0, VLDN   |
|            1 |      455 | 2025-02-08 | BC.Game Esports | L   | 0.438      | -            | -                | -                | -         |    -4.93 | c0llins, Dragon, emi, Kind0, VLDN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,928.15)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.538 | $2,000.00      | $1,076.30       |
| 2025-02-15 |      0.485 | $10,000.00     | $4,851.85       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

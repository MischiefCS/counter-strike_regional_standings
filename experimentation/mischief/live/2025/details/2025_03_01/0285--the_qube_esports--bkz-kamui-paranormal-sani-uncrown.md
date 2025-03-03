### Roster Details<br />
Team Name: The QUBE Esports<br />
Roster: bkz, Kamui, Paranormal, Sani, Uncrown<br />
Global Rank: [285](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [47]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  574.7<br />
<br />
Final Rank Value (574.7) = Starting Rank Value (546.2) + Head To Head Adjustments (28.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.075<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 546.2
- 400 + ( ( 0.075 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 546.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1184 | 2024-12-24 | Chinggis Warriors  | L   | 0.756      | -            | -                | -                | -         |    -2.54 | bkz, Kamui, Paranormal, Sani, Uncrown      |
|           11 |     1191 | 2024-12-24 | The Huns Esports   | L   | 0.751      | -            | -                | -                | -         |    -2.73 | bkz, Kamui, Paranormal, Sani, Uncrown      |
|           10 |     1193 | 2024-12-23 | Clutch Gaming      | W   | 0.750      | 0.143        | 0.000 (0.000)    | 0.052 (0.006)    | 1 (0.750) |    10.45 | bkz, Kamui, Paranormal, Sani, Uncrown      |
|            9 |     1932 | 2024-12-03 | Harizma            | L   | 0.611      | -            | -                | -                | -         |    -3.95 | bkz, crystalised, Kamui, Paranormal, ZeDGe |
|            8 |     1936 | 2024-12-03 | DEWA United        | W   | 0.611      | 0.143        | 0.000 (0.000)    | 0.192 (0.017)    | 0 (0.000) |    10.89 | bkz, crystalised, Kamui, Paranormal, ZeDGe |
|            7 |     1945 | 2024-12-02 | Kadiliman Esports  | W   | 0.611      | 0.143        | 0.000 (0.000)    | 0.034 (0.003)    | 0 (0.000) |     5.57 | bkz, crystalised, Kamui, Paranormal, ZeDGe |
|            6 |     1951 | 2024-12-02 | Eruption           | W   | 0.610      | 0.143        | 0.014 (0.001)    | 0.658 (0.057)    | 0 (0.000) |    16.98 | bkz, crystalised, Kamui, Paranormal, ZeDGe |
|            5 |     1953 | 2024-12-02 | The Huns Esports   | L   | 0.610      | -            | -                | -                | -         |    -1.64 | bkz, crystalised, Kamui, Paranormal, ZeDGe |
|            4 |     2004 | 2024-12-02 | The Huns Esports   | L   | 0.604      | -            | -                | -                | -         |    -1.53 | aNSeLMO, bkz, Kamui, Paranormal, ZeDGe     |
|            3 |     2017 | 2024-12-01 | Zen-ei             | W   | 0.604      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.79 | aNSeLMO, bkz, Kamui, Paranormal, ZeDGe     |
|            2 |     2668 | 2024-11-15 | THE (Russian team) | L   | 0.497      | -            | -                | -                | -         |    -5.97 | bkz, Kamui, m4mc, Paranormal, ZeDGe        |
|            1 |     2671 | 2024-11-15 | Harizma            | L   | 0.497      | -            | -                | -                | -         |    -2.86 | bkz, Kamui, m4mc, Paranormal, ZeDGe        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

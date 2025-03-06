### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [156](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [100]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  641.4<br />
<br />
Final Rank Value (641.4) = Starting Rank Value (645.0) + Head To Head Adjustments (-3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.0
- 400 + ( ( 0.118 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 645.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1324 | 2024-11-21 | TSM               | L   | 0.288      | -            | -                | -                | -         |    -4.22 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     1344 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.283      | -            | -                | -                | -         |    -2.89 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     1351 | 2024-11-20 | Team Falcons      | L   | 0.282      | -            | -                | -                | -         |    -0.01 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     1641 | 2024-11-07 | Nemiga Gaming     | L   | 0.189      | -            | -                | -                | -         |    -1.45 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     1648 | 2024-11-06 | SINNERS Esports   | W   | 0.184      | 0.143        | 0.015 (0.000)    | 0.337 (0.009)    | 0 (0.000) |     4.20 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     1889 | 2024-10-18 | BC.Game Esports   | L   | 0.057      | -            | -                | -                | -         |    -0.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     1908 | 2024-10-17 | Fnatic            | L   | 0.051      | -            | -                | -                | -         |    -0.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     1929 | 2024-10-16 | Sashi Esport      | L   | 0.045      | -            | -                | -                | -         |    -0.31 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     1936 | 2024-10-16 | Team Solid        | W   | 0.044      | 0.624        | 0.021 (0.001)    | 0.501 (0.014)    | 1 (0.044) |     0.93 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     1960 | 2024-10-15 | Aurora Gaming     | W   | 0.038      | 0.500        | 0.006 (0.000)    | 0.437 (0.008)    | 0 (0.000) |     0.75 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($355.87)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.204 | $15.18         | $3.10           |
| 2024-10-20 |      0.071 | $5,000.00      | $352.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

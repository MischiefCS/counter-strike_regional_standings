### Roster Details<br />
Team Name: Passion UA<br />
Roster: jackasmo, jambo, Kvem, Topa, zeRRoFIX<br />
Global Rank: [30](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [21]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  626.8<br />
<br />
Final Rank Value (626.8) = Starting Rank Value (628.2) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.2
- 400 + ( ( 0.087 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 628.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      140 | 2025-02-21 | GUN5 Esports           | L   | 0.104      | -            | -                | -                | -         |    -1.00 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            4 |      264 | 2025-02-14 | ENCE                   | L   | 0.059      | -            | -                | -                | -         |    -0.54 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            3 |      292 | 2025-02-13 | Betclic Apogee Esports | W   | 0.051      | 0.435        | 0.000 (0.000)    | 0.193 (0.004)    | 0 (0.000) |     0.35 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            2 |      469 | 2025-02-08 | HEROIC                 | L   | 0.016      | -            | -                | -                | -         |    -0.29 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            1 |      503 | 2025-02-07 | BetBoom Team           | W   | 0.010      | 0.143        | 0.000 (0.000)    | 0.104 (0.000)    | 0 (0.000) |     0.10 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130.37)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.065 | $2,000.00      | $130.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

### Roster Details<br />
Team Name: Passion UA<br />
Roster: jackasmo, jambo, Kvem, Topa, zeRRoFIX<br />
Global Rank: [45](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [30]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  768.3<br />
<br />
Final Rank Value (768.3) = Starting Rank Value (754.9) + Head To Head Adjustments (13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 754.9
- 400 + ( ( 0.153 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 754.9


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
|            7 |      140 | 2025-02-21 | GUN5 Esports           | L   | 0.524      | -            | -                | -                | -         |    -7.61 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            6 |      264 | 2025-02-14 | ENCE                   | L   | 0.479      | -            | -                | -                | -         |    -7.75 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            5 |      292 | 2025-02-13 | Betclic Apogee Esports | W   | 0.471      | 0.435        | 0.004 (0.001)    | 0.514 (0.105)    | 0 (0.000) |     7.30 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            4 |      469 | 2025-02-08 | HEROIC                 | L   | 0.436      | -            | -                | -                | -         |    -2.71 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            3 |      503 | 2025-02-07 | BetBoom Team           | W   | 0.430      | 0.143        | 0.100 (0.006)    | 0.350 (0.021)    | 0 (0.000) |     9.15 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            2 |      559 | 2025-02-05 | BetBoom Team           | W   | 0.417      | 0.143        | 0.100 (0.006)    | 0.350 (0.021)    | 0 (0.000) |     9.15 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            1 |      568 | 2025-02-05 | Metizport              | W   | 0.416      | 0.143        | 0.010 (0.001)    | 0.209 (0.012)    | 0 (0.000) |     5.86 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($970.37)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.485 | $2,000.00      | $970.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, history, kye, nicks, piriajr<br />
Global Rank: [49](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [11]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  746.8<br />
<br />
Final Rank Value (746.8) = Starting Rank Value (741.5) + Head To Head Adjustments (5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 741.5
- 400 + ( ( 0.147 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 741.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      105 | 2025-02-22 | Imperial Esports | L   | 0.533      | -            | -                | -                | -         |    -5.34 | arT, history, kye, nicks, piriajr |
|            7 |      121 | 2025-02-21 | Team Solid       | W   | 0.526      | 0.371        | 0.012 (0.002)    | 0.399 (0.078)    | 0 (0.000) |     8.20 | arT, history, kye, nicks, piriajr |
|            6 |      302 | 2025-02-12 | Legacy           | L   | 0.467      | -            | -                | -                | -         |    -5.95 | arT, history, kye, nicks, piriajr |
|            5 |      306 | 2025-02-12 | Sharks Esports   | W   | 0.466      | 0.143        | 0.027 (0.002)    | 0.464 (0.031)    | 0 (0.000) |     8.65 | arT, history, kye, nicks, piriajr |
|            4 |      323 | 2025-02-11 | Legacy           | L   | 0.460      | -            | -                | -                | -         |    -5.92 | arT, history, kye, nicks, piriajr |
|            3 |      329 | 2025-02-11 | Imperial Esports | W   | 0.459      | 0.143        | 0.061 (0.004)    | 0.844 (0.055)    | 0 (0.000) |    10.20 | arT, history, kye, nicks, piriajr |
|            2 |      459 | 2025-02-08 | Imperial Esports | L   | 0.438      | -            | -                | -                | -         |    -4.55 | arT, history, kye, nicks, piriajr |
|            1 |      682 | 2025-01-16 | Eternal Fire     | L   | 0.284      | -            | -                | -                | -         |    -0.01 | arT, history, kye, nicks, piriajr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($800.49)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.534 | $1,500.00      | $800.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />

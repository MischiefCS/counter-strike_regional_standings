### Roster Details<br />
Team Name: Sharks Esports<br />
Roster: doc, gafolo, koala, Nicks, rdnzao<br />
Global Rank: [21](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [4]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  821.8<br />
<br />
Final Rank Value (821.8) = Starting Rank Value (821.6) + Head To Head Adjustments (0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.429[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 821.6
- 400 + ( ( 0.161 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 821.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      103 | 2025-02-22 | Imperial Esports       | L   | 0.114      | -            | -                | -                | -         |    -1.41 | doc, gafolo, koala, Nicks, rdnzao |
|            8 |      108 | 2025-02-22 | ODDIK                  | W   | 0.112      | 0.371        | 0.017 (0.001)    | 0.476 (0.020)    | 0 (0.000) |     1.46 | doc, gafolo, koala, Nicks, rdnzao |
|            7 |      127 | 2025-02-21 | Swingers               | W   | 0.105      | 0.371        | 0.009 (0.000)    | 0.385 (0.015)    | 0 (0.000) |     0.80 | doc, gafolo, koala, Nicks, rdnzao |
|            6 |      153 | 2025-02-20 | Bounty Hunters Esports | W   | 0.099      | 0.371        | 0.000 (0.000)    | 0.247 (0.009)    | 0 (0.000) |     0.28 | doc, gafolo, koala, Nicks, rdnzao |
|            5 |      306 | 2025-02-12 | Fluxo                  | L   | 0.046      | -            | -                | -                | -         |    -0.82 | doc, gafolo, koala, Nicks, rdnzao |
|            4 |      324 | 2025-02-11 | Imperial Esports       | W   | 0.040      | 0.143        | 0.116 (0.001)    | 0.673 (0.004)    | 0 (0.000) |     0.77 | doc, gafolo, koala, Nicks, rdnzao |
|            3 |      330 | 2025-02-11 | Legacy                 | L   | 0.039      | -            | -                | -                | -         |    -0.75 | doc, gafolo, koala, Nicks, rdnzao |
|            2 |      400 | 2025-02-09 | MIBR                   | L   | 0.025      | -            | -                | -                | -         |    -0.14 | doc, gafolo, koala, Nicks, rdnzao |
|            1 |      458 | 2025-02-08 | BESTIA                 | W   | 0.018      | 0.143        | 0.000 (0.000)    | 0.065 (0.000)    | 0 (0.000) |     0.08 | doc, gafolo, koala, Nicks, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($454.63)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.114 | $4,000.00      | $454.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
